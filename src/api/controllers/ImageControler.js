const ImageService = require('../services/ImageService')

class ImageController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await ImageService.getAll([
                'id',
                'name',
                'permission',
                'categoryId'
            ]))
        } catch(error){
            console.log(error);
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const Image = await ImageService.getOne(request.params.id)
            if(Image){
                return response.status(200).json(image)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await ImageService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingImage = await ImageService.getOne(request.params.id)
            if(existingImage){
                return response.status(200).json(await existingImage.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await ImageService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    } 
}

module.exports = new ImageController()