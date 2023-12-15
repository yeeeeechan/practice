import DaumPostcode from 'react-daum-postcode';
import React from 'react';

const DaumPost = () => {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        
        const {addressType, bname, buildingName} = data
        if (addressType === 'R') {
            if (bname !== '') {
                extraAddress += bname;
            }
            if (buildingName !== '') {
                extraAddress += `${extraAddress !== '' && ', '}${buildingName}`;
            }
            fullAddress += `${extraAddress !== '' ? ` ${extraAddress}` : ''}`;
        }
        //fullAddress -> 전체 주소반환
    }
    return (<DaumPostcode onComplete={handleComplete} className="post-code" />);
}
export default DaumPost;