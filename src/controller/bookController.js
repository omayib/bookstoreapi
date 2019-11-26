var book = require('../repository/book')
var mongoose = require('mongoose')

function get(){
    return new Promise((resolve,reject)=>{
        book.find({is_archived:false})
            .sort({created_at:-1})
            .exec((err,result)=>{
            console.log(err)
            if(err){
                reject('terjadi kesalahan')
            }else{
                console.log(result)
                resolve(result)
            }
        })
    })
}
function getById(id){
    return new Promise((resolve,reject)=>{
        book.findOne({_id:id},(err,result)=>{
            if(err){
                reject('terjadi kesalahan')
            }else{
                resolve(result)
            }
        })
    })
}

function insert(data){
    console.log('bk',book)
    return new Promise((resolve,reject)=>{
        book.create(data,(err,result)=>{
            if(err){
                console('er',err)
                reject(err)
            }else{
                console.log('ins',result)
                resolve(result)
            }
        })
    })
}

function update(data){
    return new Promise((resolve,reject)=>{
        book.findOneAndUpdate(
            {
                _id:mongoose.Types.ObjectId(data.id)
            },
            {
                $set:data
            },
            {
                new:true
            },
            (err,doc)=>{
            if(err) reject(err)
            resolve(doc)
        })
    })
}

function archive(id){
    console.log('arc',id)
    return new Promise((resolve,reject)=>{
        book.findOneAndUpdate(
            {
                _id:mongoose.Types.ObjectId(id)
            },
            {
                $set:{
                    is_archived:true
                }
            },
            {
                new:true
            },
            (err,doc)=>{
            console.log('e',err)
            console.log('doc',doc)
            if(err) reject(err)
            resolve(doc)
        })
    })
}

module.exports = {
    update:update,
    insert:insert,
    getById:getById,
    get:get,
    delete:archive
}