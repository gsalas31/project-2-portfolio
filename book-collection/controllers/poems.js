const db = require('../db/index.js')
const Poem = require('../models/poems.js')

//Controllers for Poems------------------------------------------------
const index = async (req, res)=>{
    try {
        const allPoems=await Poem.find({}).populate('poems')
        console.log(allPoems)
        res.status(200).json(allPoems)
       
    }
    catch(error){
        res.status(400).send(error)
    }
    }


module.exports={
    index
    }