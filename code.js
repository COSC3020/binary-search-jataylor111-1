function binarySearch(list, element) {
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
            return 0;
        }
    }

    return -1;
}
