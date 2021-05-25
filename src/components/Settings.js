import React from 'react';

const showSettings = () => {
    $('[data-toggle="popover_settings"]').popover({
        html : true, 
        content: function() {
            return $('#popover_content_wrapper_settings').html();
        }
    });
}

const Settings = () => {
    return (
        <div>
            <a className="nav-link" href="#" data-toggle="popover_settings" title="Settings" data-placement="bottom" data-content="">
                <img title="Settings" src="/src/images/settings.png" onClick={showSettings} />
            </a>
            <div id="popover_content_wrapper_settings" style={{display: "none"}}>
                <div>This is your div content!</div>
                <hr />
                <div>This is your div content!</div>
                <hr />
                <div>This is your div content!</div>
            </div>
        </div>
    )
}

export default Settings;