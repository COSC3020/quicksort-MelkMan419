function swap(array, leftIndex, rightIndex) {
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)],
        i = left,
        j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quicksort(array) {
    var stack = [];
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 0) {
        let end = stack.pop();
        let start = stack.pop();

        let index = partition(array, start, end);

        if (start < index - 1) {
            stack.push(start);
            stack.push(index - 1);
        }

        if (index < end) {
            stack.push(index);
            stack.push(end);
        }
    }
    return array;
}

module.exports = quicksort;
