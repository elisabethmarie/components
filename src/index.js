import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import Card from './Card';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div><h4>Warning!</h4>
                    Are you sure you want to do this?</div></ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    date="Today at 6:00PM"
                    text="Nice blogpost!"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Bob"
                    date="Yesterday at 4:30PM"
                    text="Cool!"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <Card>
                &nbsp; Open e-mail
                <ApprovalCard></ApprovalCard>
            </Card>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));