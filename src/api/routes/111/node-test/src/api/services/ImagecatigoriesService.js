const ImagecatigoriesRepository = require('../../database/repositories/ImagecatigoriesRepository')
class ImagecatigoriesService {
    async getAll(fields = undefined) {
        return await ImagecatigoriesRepository.getAll(fields)
    }

    async getOne(id) {
        return await ImagecatigoriesRepository.getOne(id)
    }

    async create(Imagecatigories) {
        return await ImagecatigoriesRepository.create(Imagecatigories)
    }

    async update(id, Imagecatigories) {
        const existingImagecatigories = await ImagecatigoriesRepository.getOne(id)
        if (existingImagecatigories) {
            return await existingImagecatigories.update(Imagecatigories);
        }
        return null;
    }

    async delete(id) {
        return await ImagecatigoriesRepository.delete(id)
    }

    async getRegions(ImagecatigoriesId, fields) {
        return await RegionsRepository.getAllOfImagecatigories(ImagecatigoriesId, fields);
    }

    async getLocations(ImagecatigoriesId, fields) {
        return await LocationsRepository.getAllOfImagecatigories(ImagecatigoriesId, fields);
    }
}

module.exports = new ImagecatigoriesService()