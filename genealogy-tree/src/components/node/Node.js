import React from 'react';
import './Node.css';

const Node = (attributes) => {

  const node = attributes.data
  const level = attributes.level + 1

  return (
    <div>
        <div className="card-avatar">
            <img className="img" src="https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png"></img>
        </div>
        <h6 className="category">{node.username}</h6>
        <ChildrenNode children={node.children} level={level}/>
        
    </div>
  );
}

const ChildrenNode = (attributes) => {
    const children = attributes.children
    if(children != undefined) {
        const level = attributes.level
    
        if(children.length == 1) {
            if(level < 4) {
                return (
                    <div className="Node-item-1">
                        <div>
                            <Node data={children[0]} level={level}/>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div style={{display:"none"}} className="Node-item-1">
                        <div>
                            <Node data={children[0]} level={level}/>
                        </div>
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

            if(level < 4) {
                return (
                    <div className="Node-item-2">
                        <div>
                            <Node data={placement.left} level={level}/>
                        </div>
                        <div>
                            <Node data={placement.right} level={level}/>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div style={{display:"none"}} className="Node-item-2">
                        <div>
                            <Node data={placement.left} level={level}/>
                        </div>
                        <div>
                            <Node data={placement.right} level={level}/>
                        </div>
                    </div>
                );
            }
        }
    } else {
        return (null);
    }
    
}

export default Node;
