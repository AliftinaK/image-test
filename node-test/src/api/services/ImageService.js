const ImageRepository = require('../../database/repositories/ImageRepository')
class ImageService {
    async getAll(fields = undefined) {
        return await ImageRepository.getAll(fields)
    }

    async getOne(id) {
        return await ImageRepository.getOne(id)
    }

    async create(Image) {
        return await ImageRepository.create(Image)
    }

    async update(id, Image) {
        const existingImage = await ImageRepository.getOne(id)
        if (existingImage) {
            return await existingImage.update(Image);
        }
        return null;
    }

    async delete(id) {
        return await ImageRepository.delete(id)
    }

    async getRegions(ImageId, fields) {
        return await RegionsRepository.getAllOfImage(ImageId, fields);
    }

    async getLocations(ImageId, fields) {
        return await LocationsRepository.getAllOfImage(ImageId, fields);
    }
}

module.exports = new ImageService()