const data = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const selectedItem = [1, 8, 9];

const flattenArr = (val) => {
  return [val.id, ...(val.children?.flatMap(flattenArr) || [])];
};

const checkBox = ({ arr, isParentChecked = false }) => {
  return arr.map((p, ip) => {
    const childerIds = p?.children?.length ? flattenArr(p.children) : [],
      isChildrenAllChecked = childerIds.every((e) => selectedItem.includes(e)),
      isChecked =
        selectedItem.includes(p.id) || isParentChecked || isChildrenAllChecked;

    // if (p.id === 7) {
    //   console.log("check: ", p.children);
    // }

    // console.log("childerIds: ", childerIds, isChildrenAllChecked, "id: ", p.id);

    return {
      id: p.id,
      label: p.label,
      isChecked: isChecked || isParentChecked,
      ...(p?.children?.length && {
        children: checkBox({ arr: p.children, isParentChecked: isChecked }),
      }),
    };
  });
};

const result = data;

console.log("result: ", checkBox({ arr: data }));

console.log("children: ", flattenArr(data[0]));
