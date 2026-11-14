import 'server-only';
import mysql from 'mysql2/promise';

let pool = null;

/**
 * Returns a reusable MySQL connection pool instance configured via environment variables.
 * Safe for server-side Next.js Node.js runtime environment on Hostinger.
 */
export function getDbPool() {
  if (!pool) {
    const host = process.env.DB_HOST || '127.0.0.1';
    const port = Number(process.env.DB_PORT) || 3306;
    const database = process.env.DB_NAME || 'u621127133_tutorproctored';
    const user = process.env.DB_USER || '';
    const password = process.env.DB_PASSWORD || '';

    pool = mysql.createPool({
      host,
      port,
      database,
      user,
      password,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      connectTimeout: 10000,
    });
  }
  return pool;
}

/**
 * Executes a parameterized SQL query with prepared statements against the connection pool.
 * Automatically sanitizes inputs to prevent SQL injection vulnerabilities.
 */
export async function queryDb(sql, params = []) {
  try {
    const dbPool = getDbPool();
    const [rows] = await dbPool.execute(sql, params);
    return rows;
  } catch (error) {
    // Log sanitized error without exposing credentials or connection strings
    console.error('[MySQL Query Error]:', error.message || 'Database query execution failed');
    throw new Error(`Database error: ${error.message || 'Execution failed'}`);
  }
}

/**
 * Read-only diagnostic check that tests database pool connectivity, database name, and table inventory.
 */
export async function testDbConnection() {
  try {
    const pingResult = await queryDb('SELECT 1 as connected;');
    const dbNameResult = await queryDb('SELECT DATABASE() as dbName;');
    const tablesResult = await queryDb('SHOW TABLES;');

    const currentDb = dbNameResult[0]?.dbName || 'unknown';
    const tablesKey = `Tables_in_${currentDb}`;

    const tables = (tablesResult || []).map((row) => row[tablesKey] || Object.values(row)[0]);

    // Inspect structure for each discovered table
    const tableStructures = {};
    for (const tableName of tables) {
      try {
        const columns = await queryDb(`DESCRIBE \`${tableName.replace(/`/g, '')}\`;`);
        const countResult = await queryDb(`SELECT COUNT(*) as total FROM \`${tableName.replace(/`/g, '')}\`;`);
        tableStructures[tableName] = {
          columns: (columns || []).map((col) => ({
            field: col.Field,
            type: col.Type,
            null: col.Null,
            key: col.Key,
            default: col.Default,
          })),
          recordCount: countResult[0]?.total || 0,
        };
      } catch (tableErr) {
        tableStructures[tableName] = { error: tableErr.message };
      }
    }

    return {
      success: true,
      connected: pingResult[0]?.connected === 1,
      database: currentDb,
      tablesCount: tables.length,
      tables,
      tableStructures,
    };
  } catch (error) {
    return {
      success: false,
      connected: false,
      error: error.message || 'Failed to establish database connection',
      hostingerHint: 'Ensure DB_HOST, DB_PORT, DB_NAME, DB_USER, and DB_PASSWORD environment variables are set in Hostinger hPanel.',
    };
  }
}

/**
 * Alias for testDbConnection for health endpoint compatibility.
 */
export const checkDbConnection = testDbConnection;
