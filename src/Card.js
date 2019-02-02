import React from 'react';

const Card = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                <div class="ui label">
                    <i class="mail icon"></i> 23
</div>
                {props.children}
            </div>
        </div>
    );
};

export default Card;