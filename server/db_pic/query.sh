a=($(find .))

for i in ${a[*]}
do
	echo 'db.pic.insertOne({ 

		"rel" : "'\'$i\''",
       
        	}
	)'
done


