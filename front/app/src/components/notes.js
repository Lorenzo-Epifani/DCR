
db.pic.find({$text:{ $search: "statue", $caseSensitive: false}})  //FIND TEXT QUERY

 
db.pic.createIndex({class: "text", Country: "text", City:"text", additional_info:"text", description:"text" })  //ADD TEXT INDEX