const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */


  async customFind() {
    const entity = await strapi.query('article').model.fetchAll( {
      columns: ['id','title', 'description']
  });
    return sanitizeEntity(entity, { model: strapi.models.article });
  },

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.article.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
};
