fs = require('fs')
my_lib = require('./gcd_functions.js')


//this function reads the values from the input file, calls the gcd function, 
//writes the gotten answer into the output file, compares it with the
//corresponding data from the golden file
//and writes the appropriate message in the result file. 
//These operations are performed one after another for every line 
function test()
{
        let input_list = fs.readFileSync('input.txt', 'utf8').split('\n')
	input_list.pop()
	let o_file = fs.writeFileSync('output.txt', '')
	let i = 0
        for (line of input_list){
    		nums = line.split(' ')
		let answer = my_lib.gcd(nums[0], nums[1])
    		fs.appendFileSync('output.txt', answer + '\n')
        }
}

test()
