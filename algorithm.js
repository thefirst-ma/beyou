/*
 * @Author: xinyue
 * @Date: 2023-04-18 19:53:53
 * @Description: 
 * 
 */
let jsonArr = [
    {
        type: 'data',
        name: 'd1.json'
    },
    {
        type: 'data',
        name: 'd2.json'
    },
    {
        type: 'folder',
        name: 'sub1',
        dataset: [
            {
                type: 'data',
                name: 'a.txt'
            },
            {
                type: 'folder',
                name: 'd1.json',
                dataset: [
                    {
                        type: 'data',
                        name: 'a.txt'
                    },
                ]
            },
        ]
    },
]
function find (dataname, dataset) {
    if(!dataset || dataset.length == 0) return;
    let arr = [];
    function getName (dataset, index = 0) {
        dataset.forEach(element => {
            if(element.dataset && element.name !== dataname) {
                if(arr[index]) {
                    arr[index] = arr[index] + element.name
                } else {
                    arr[index] = element.type + ':/' + element.name
                }
                getName(element.dataset, arr)
            } else if(element.name === dataname) {
                // console.log(arr[index])
                if(arr[index]) {
                    arr[index] = arr[index] + '/' + element.name
                } else {
                    arr[index] = element.type + ':/' + element.name
                }
                index++
                // arr.push(element.type)
                // answer.push(arr)
                // answer[index] = 
            }
        });
    }
    getName(dataset)
    // arr.forEach(item => console.log(item))
}
find('d1.json', jsonArr)

function randomArr (arr) {
    return arr.sort((a, b)=> {
        // [0, 1)
        return Math.random() - Math.random()
    })
}

function get (arr, vlaue) {
    let left = arr[0];
    let length = arr.length;
    let right = arr.at(length - 1);
        while(left < right) {
            let middleLength = Math.ceil(length / 2)
            let middle = arr[middleLength]
            if(middle < value) {
                left = middle;
            } else if (middle > value) {
                if(right = middle) left = right;
                right = middle;
            } else if (middle == value) {
                left = middle;
                return;
            }
        }
        return left;
  }
