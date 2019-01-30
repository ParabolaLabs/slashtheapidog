function buildResult(data) {
  return {
    data: data,
    length: data.length,
    has_more: false
  };
}

function getItem(list, id) {
  return list.find((item) => {
    return item.id === parseInt(id, 10);
  });
}

module.exports = { buildResult, getItem };
