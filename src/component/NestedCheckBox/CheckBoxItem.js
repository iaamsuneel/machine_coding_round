export default function CheckBoxItem({
  checkBoxList,
  checked,
  setChecked,
  originalList,
}) {
  // if parent select then all children auto select
  console.log("render", originalList);
  const updateChildrens = (node, checkedVal, state) => {
    state[node.id] = checkedVal;
    node.children?.forEach((child) => {
      updateChildrens(child, checkedVal, state);
    });
  };
  // if all child select then parent auto select
  const updateParent = (data, state) => {
    for (let ele of data) {
      if (ele.children) {
        updateParent(ele.children, state);
        state[ele.id] = ele.children?.every((child) => state[child.id]);
      }
    }
  };
  const onChangeHandler = (checkedVal, node) => {
    const updateState = { ...checked };
    // if parent select then all children auto select
    updateChildrens(node, checkedVal, updateState);
    // if all child select then parent auto select
    updateParent(originalList, updateState);
    // update state
    setChecked(updateState);
  };
  return (
    <div>
      {checkBoxList.map((node) => {
        return (
          <div key={node.id} className="checkbox-item">
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => onChangeHandler(e.target.checked, node)}
            />
            <span>{node.label}</span>
            {node.children && (
              <CheckBoxItem
                checkBoxList={node.children}
                checked={checked}
                setChecked={setChecked}
                originalList={originalList}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
