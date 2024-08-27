const schema = require('../models/IncomeModel');
exports.addIncome = async(req,res)=>{
    const {title, amount, category, description, date} =req.body;
    
    const income = schema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        if(!title || !category || !description || !date){
           return res.status(400).json({message:'All fields are required!!'});
        }
        if(amount<=0 ||  !amount ==='number'){
            return res.status(400).json({message:'Amount must be a positive number!!'});
        }
        await income.save();
        res.status(200).json({message:'Income added!!'});

    }catch(err){
        res.status(500).json({message:'Server Error'});
    }


    console.log(income);
}

exports.getIncome = async(req,res)=>{
    try{
        const incomes = await schema.find().sort({createdAt:-1})
        res.status(200).json(incomes);
    }catch(err){
        res.status(500).json({message: 'server Error!'});
    }
}

exports.deleteIncome = async(req,res)=>{
    const {id} = req.params;//params means the parameter is send in the http method and we extract that parameter from the http request..
    schema.findByIdAndDelete(id).then((income) =>{
        res.status(200).json({message:'Income Deleted'});
    }).catch((err) =>{
        res.status(500).json({messsage:'Server Error'});
    })
}