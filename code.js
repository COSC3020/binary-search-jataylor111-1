function binarySearch(list, element) { //Requires a sorted list but that is handled in the test
    //Skip the search if the list is empty
    if (list.length === 0) { return -1}
    
    //Now search
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (list[middle] < element) {
            left = middle + 1;
        } else if (list[middle] > element) {
            right = middle - 1;
        } else {
            //In instances where the list contains all the same number then it would get tripped up so I used this if/else to compensate 
            if (list[0] == element) {
                return 0;
            } else {
                return middle;
            }        
        }
    }

    return -1;
}
