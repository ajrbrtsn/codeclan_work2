use zoo;

const id = ObjectId ('65118f76d09ad5d6f410c576')
db.animals.findOne({_id: id})

db.animal.updateOne(
    {_id: id},
    {$set: {name: 'Gary'}}
);

db.animals.deleteOne({_id: id});