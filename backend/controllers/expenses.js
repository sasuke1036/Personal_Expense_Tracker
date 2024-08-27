const EXschema = require('../models/ExpenseModel');

exports.addExpense = async(req,res)=>{
    const {title, amount, category, description, date} =req.body;
    
    const income = EXschema({
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
        res.status(200).json({message:'Expense added!!'});

    }catch(err){
        res.status(500).json({message:'Server Error'});
    }


    console.log(income);
}

exports.getExpense = async(req,res)=>{
    try{
        const incomes = await EXschema.find().sort({createdAt:-1})
        res.status(200).json(incomes);
    }catch(err){
        res.status(500).json({message: 'server Error!'});
    }
}

exports.deleteExpense = async(req,res)=>{
    const {id} = req.params;//params means the parameter is send in the http method and we extract that parameter from the http request..
    EXschema.findByIdAndDelete(id).then((income) =>{
        res.status(200).json({message:'Expense Deleted'});
    }).catch((err) =>{
        res.status(500).json({messsage:'Server Error'});
    })
}