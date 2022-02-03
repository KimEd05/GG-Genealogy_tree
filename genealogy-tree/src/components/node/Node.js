import * as React from 'react';
import './Node.css';

const Node = (attributes) => {

  const node = attributes.data
  const level = attributes.level + 1

  return (
    <div>
        <div className="card-avatar">
            <img className="img" src={require("../../assets/person.png")}></img>
        </div>
        <h6 className="category">{node.username}</h6>
        <div className="title">
            <table>
                <tr>
                    <th>Full name</th>
                    <td>{node.full_name}</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td>{node.status}</td>
                </tr>
                <tr>
                    <th>Product</th>
                    <td>{node.product_name}</td>
                </tr>
                <tr>
                    <th>Category</th>
                    <td>{node.category_name}</td>
                </tr>
            </table>
        </div>
        <ChildrenNode children={node.children} level={level} actual_id={node.distributor_id}/>
    </div>
  );
}

const show_hide_1 = (id) => {
    const element = document.getElementById(id)
    element.style.display = 'grid'

    const elementButton = document.getElementById('button-'+id)
    elementButton.style.display = 'none'
}

const nodeCreation = (node, level) => {
    return(
        <div>
            <Node data={node} level={level}/>
            <button id={'button-'+node.distributor_id}  onClick={() => {show_hide_1(node.distributor_id)}}>+</button>
        </div>
    );
}

const ChildrenNode = (attributes) => {
    const children = attributes.children

    if(children != undefined) {
        const level = attributes.level
        const id_parent = children[0].parent_id
    
        if(children.length == 1) {
            if(level < 3) {
                return (
                    <div id={id_parent} className="Node-item-1">
                        <div>
                            <Node data={children[0]} level={level}/>
                        </div>
                    </div>
                );
            } else if(level == 3) {
                return (
                    <div id={id_parent} className="Node-item-1">
                        {nodeCreation(children[0], level)}
                    </div>
                );
            } else {
                return (
                    <div id={id_parent} style={{display:"none"}} className="Node-item-1">
                        {nodeCreation(children[0], level)}
                    </div>
                );
            }
            
        } else if(children.length == 2) {
            const placement = {left: {}, right: {}}

            if (children[0].binary_placement.toLowerCase() == "left") {
                placement.left = children[0]
                placement.right = children[1]
            } else {
                placement.left = children[1]
                placement.right = children[0]
            }

            if(level < 3) {
                return (
                    <div id={id_parent} className="Node-item-2">
                        <div>
                            <Node data={placement.left} level={level}/>
                        </div>
                        <div>
                            <Node data={placement.right} level={level}/>
                        </div>
                    </div>
                );
            } else if(level == 3) {
                return (
                    <div id={id_parent} className="Node-item-2">
                        {nodeCreation(placement.left, level)}
                        {nodeCreation(placement.right, level)}
                    </div>
                );
            } else {
                return (
                    <div id={id_parent} style={{display:"none"}} className="Node-item-2">
                        {nodeCreation(placement.left, level)}
                        {nodeCreation(placement.right, level)}
                    </div>
                );
            }
        }
    } else {
        return (null);
    }
    
}

export default Node;
