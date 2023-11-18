const Imagecatigories = require('../models').Imagecatigories
class ImagecatigoriesRepository {
    async getAll(fields = undefined) {
        return await Imagecatigories.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Imagecatigories.findByPk(id)
    }

    async create(imagecatigories) {
        return await Imagecatigories.create(imagecatigories)
    }

    async update(id, imagecatigories) {
        const existingImagecatigories = await Imagecatigories.findByPk(id)
        if (existingImagecatigories) {
            return await existingImagecatigories.update(imagecatigories);
        }
        return null;
    }

    async delete(id) {
        return await Imagecatigories.destroy({
            where: { id: id }
        })
    }
}

module.exports = new ImagecatigoriesRepository()