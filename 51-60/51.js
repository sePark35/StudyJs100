// Q merge sort를 만들어보자
// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

// 1.리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
// 2.정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
// 3.각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
// 4.두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

// 다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.
function mergeSort(arr){
  if (arr.length <= 1){
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
  let result = [];
  while (/*빈칸을 채워주세요*/ && /*빈칸을 채워주세요*/){
    if (/*빈칸을 채워주세요*/){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    /*빈칸을 채워주세요*/
  }
  while (right.length) {
    /*빈칸을 채워주세요*/
  }
  return result;
}
const array = [1,3,5,4,8,6,7,2]
console.log(mergeSort(array));

// Answer
//// 🙈 Oum 1회독 => 풀려면 재귀함수에 대해 알아야함. 아직 못품
function mergeSort(arr){
  if (arr.length <= 1){
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let result = [];
  while (left.length && right.length){
    if (left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
const array = [1,3,5,4,8,6,7,2]
console.log(mergeSort(array));

//sjshin

// 🌸 sePark 🌸