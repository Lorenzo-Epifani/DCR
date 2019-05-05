a=($(find .))
for i in ${a[*]}
do
echo 'INSERT INTO `mydb`.`picture` (`relink`) VALUES ('\'$i\'');'
done