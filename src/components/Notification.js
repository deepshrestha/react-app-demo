import React from 'react';

const showNotification = () =>{
    $('[data-toggle="popover_notification"]').popover({
        html : true, 
        content: function() {
            return $('#popover_content_wrapper_notifications').html();
        }
    });
}

const Notification = () => {
    return (
        <div>
            <a className="nav-link" href="#" data-toggle="popover_notification" title="Notifications" data-placement="bottom" data-content="">
                <img title="Notification" src="/src/images/notification1.png" onClick={showNotification} />
            </a>
            <div id="popover_content_wrapper_notifications" style={{display: "none"}}>
                <div>This is your notification 1</div>
                <hr />
                <div>This is your notification 2</div>
                <hr />
                <div>This is your notification 3</div>
            </div>
        </div>
    )
}

export default Notification;