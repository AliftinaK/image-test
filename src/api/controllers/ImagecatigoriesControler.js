const ImagecatigoriesService = require('../services/ImagecatigoriesService')

class ImagecatigoriesController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await ImagecatigoriesService.getAll([
                'id',
                'name'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const imagecatigories = await ImagecatigoriesService.getOne(request.params.id)
            if(Imagecatigories){
                return response.status(200).json(imagecatigories)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await ImagecatigoriesService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingImagecatigories = await ImagecatigoriesService.getOne(request.params.id)
            if(existingImagecatigories){
                return response.status(200).json(await existingImagecatigories.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await ImagecatigoriesService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    } 
}

module.exports = new ImagecatigoriesController()