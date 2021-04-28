var db=require('../config/connection')
var collection=require('../config/collections')
module.exports={
    addproduct:(product,callback)=>{
       
        db.get().collection('product').insertOne(product).then((data)=>{
            
           callback(data.ops[0]._id)
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,Reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
}