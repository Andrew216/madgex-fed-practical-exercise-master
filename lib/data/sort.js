export default {
  sortData(data) {
    data.sort(function (a, b) {
      return a.orderIndex - b.orderIndex;
    });
    return data;
  },
};
