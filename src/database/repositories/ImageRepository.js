const Image = require('../models').Image
const Imagecatigories = require('../models').Imagecatigory;

class ImageRepository {
    async getAll(fields = undefined) {
        return await Image.findAll({
            attributes: fields
        })
    }

    async getOne(id) {
        return await Image.findByPk(id)
    }

    async create(image) {
        return await Image.create(image)
    }

    async update(id, image) {
        const existingImage = await Image.findByPk(id)
        if (existingImage) {
            return await existingImage.update(image);
        }
        return null;
    }

    async delete(id) {
        return await Image.destroy({
            where: { id: id }
        })
    }
}

module.exports = new ImageRepository()