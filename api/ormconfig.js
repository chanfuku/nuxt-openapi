module.exports = {
  'type': 'mysql',
  'host': process.env['MYSQL_HOST'] || 'db',
  'port': process.env['MYSQL_PORT'] || 3306,
  'username': process.env['MYSQL_USER'] || 'user',
  'password': process.env['MYSQL_PASSWORD'] || 'secret',
  'database': process.env['MYSQL_DATABASE'] || 'test',
  'synchronize': true,
  'logging': true,
  'entities': ['src/entity/**/*.ts'],
  'migrations': ['src/migration/**/*.ts'],
  'seeds': ['src/seeder/**/*.ts'],
  'cli': { 'entitiesDir': 'src/entity', 'migrationsDir': 'src/migration' },
  'timezone': 'Z'
};

