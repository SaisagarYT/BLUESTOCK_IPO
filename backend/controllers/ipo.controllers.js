const Company = require('../models/ipo.models.js');

// Get Data
const fetchData = async(req,res) =>{
    try{
        const isExist = await Company.find();
        if(isExist.length == 0){
            return res.status(400).json({message:"No data exist"});
        }
        else{
            return res.status(200).json(isExist);
        }
    }
    catch(err){
        return res.status(500).json({error:"Internal server error in get"});
    }
}

const addCompanyData = async(req,res) =>{
    const {company,priceBand,openDate,closeDate,issueSize,issueType,listingDate,status} = req.body;
    try{
        const isExist = await Company.findOne({company});
        if(!isExist){
            const newCompany = new Company({
                company:company,
                priceBand:priceBand,
                openDate:openDate,
                closeDate:closeDate,
                issueType:issueType,
                issueSize:issueSize,
                listingDate:listingDate,
                status:status
            });
            await newCompany.save();
            return res.status(200).json({message:"Inserted Successfully"});
        }
        else{
            return res.status(400).json({message:"Data already exists."})
        }
    }
    catch(err){
        return res.status(500).json({message:"Internal server error in post"});
    }
}

module.exports = {fetchData,addCompanyData};

