import { Sequelize }  from 'sequelize';
import 'dotenv/config'



// Option 1: Passing a connection URI
// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'sql.db'
});


export default sequelize;
