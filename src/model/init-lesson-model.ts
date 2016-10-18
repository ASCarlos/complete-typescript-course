

import ORM = require("Sequelize");
import {Sequelize} from 'Sequelize';



export function initLessonModel(sequelize:Sequelize) {
    return sequelize.define('Lesson', {
        url: ORM.STRING,
        description: ORM.STRING,
        duration: ORM.STRING,
        seqNo: ORM.INTEGER,
        courseId: ORM.INTEGER,
        pro: ORM.BOOLEAN,
        tags: ORM.STRING,
        videoId: ORM.STRING,
        vimeoid: ORM.STRING,
        gitHubUrl: ORM.STRING,
        downloadUrl: ORM.STRING
    }, {
        classMethods: {
            associate: function (models:any) {
                models.Lesson.belongsTo(models.Course, {foreignKey: 'courseId'});
            }
        }
    });
}