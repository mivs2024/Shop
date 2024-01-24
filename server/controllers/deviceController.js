import {v4} from 'uuid'
import path from 'path'
import {fileURLToPath} from 'url';
import {Device, DeviceInfo} from '../models/models.js'
import ApiError from '../error/ApiError.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(path.resolve(__dirname, 'static'))

class DeviceController {
    async create(req, res, next) {
        try {
            console.log(req.body)
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            // console.log(img)
            // let fileName = v4() + ".jpg"
            img.mv(path.resolve(__dirname,'..', 'static', img.name))
            const device = await Device.create({name, price, brandId, typeId, img: img.name});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }

        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )

        return res.json(device)
    }
}

export default new DeviceController()
