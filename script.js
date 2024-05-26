document.querySelector('#search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const resultsSection = document.getElementById('results-section');
    resultsSection.innerHTML = ''; // Clear previous results
  
    const sampleData = [
        {
          trainName: 'Express 101',
          from: 'Noida',
          to: 'Bengaluru',
          departure: '10:00 AM',
          arrival: '2:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 102',
          from: 'Kolkata',
          to: 'Delhi',
          departure: '11:00 AM',
          arrival: '3:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 103',
          from: 'Mumbai',
          to: 'Agra',
          departure: '12:00 PM',
          arrival: '4:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 104',
          from: 'Chennai',
          to: 'Hyderabad',
          departure: '6:00 AM',
          arrival: '12:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 105',
          from: 'Pune',
          to: 'Ahmedabad',
          departure: '7:00 AM',
          arrival: '1:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 106',
          from: 'Bhopal',
          to: 'Jaipur',
          departure: '8:00 AM',
          arrival: '2:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 107',
          from: 'Lucknow',
          to: 'Kanpur',
          departure: '9:00 AM',
          arrival: '10:00 AM',
          availability: 'Available'
        },
        {
          trainName: 'Express 108',
          from: 'Patna',
          to: 'Guwahati',
          departure: '5:00 AM',
          arrival: '3:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 109',
          from: 'Nagpur',
          to: 'Indore',
          departure: '11:00 AM',
          arrival: '5:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 110',
          from: 'Surat',
          to: 'Vadodara',
          departure: '1:00 PM',
          arrival: '3:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 111',
          from: 'Ranchi',
          to: 'Jamshedpur',
          departure: '2:00 PM',
          arrival: '4:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 112',
          from: 'Bhubaneswar',
          to: 'Visakhapatnam',
          departure: '3:00 PM',
          arrival: '7:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 113',
          from: 'Madurai',
          to: 'Coimbatore',
          departure: '4:00 PM',
          arrival: '8:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 114',
          from: 'Kochi',
          to: 'Trivandrum',
          departure: '5:00 PM',
          arrival: '9:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 115',
          from: 'Amritsar',
          to: 'Chandigarh',
          departure: '6:00 PM',
          arrival: '10:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 116',
          from: 'Shimla',
          to: 'Manali',
          departure: '7:00 PM',
          arrival: '11:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 117',
          from: 'Dehradun',
          to: 'Haridwar',
          departure: '8:00 PM',
          arrival: '10:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 118',
          from: 'Varanasi',
          to: 'Allahabad',
          departure: '9:00 PM',
          arrival: '11:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 119',
          from: 'Rajkot',
          to: 'Bhavnagar',
          departure: '10:00 PM',
          arrival: '12:00 AM',
          availability: 'Available'
        },
        {
          trainName: 'Express 120',
          from: 'Udaipur',
          to: 'Ajmer',
          departure: '6:00 AM',
          arrival: '12:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 121',
          from: 'Gwalior',
          to: 'Jhansi',
          departure: '7:00 AM',
          arrival: '9:00 AM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 122',
          from: 'Jodhpur',
          to: 'Bikaner',
          departure: '8:00 AM',
          arrival: '12:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 123',
          from: 'Mysore',
          to: 'Hubli',
          departure: '9:00 AM',
          arrival: '1:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 124',
          from: 'Vijayawada',
          to: 'Tirupati',
          departure: '10:00 AM',
          arrival: '2:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 125',
          from: 'Aurangabad',
          to: 'Nashik',
          departure: '11:00 AM',
          arrival: '3:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 126',
          from: 'Salem',
          to: 'Erode',
          departure: '12:00 PM',
          arrival: '2:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 127',
          from: 'Tiruchirapalli',
          to: 'Madurai',
          departure: '1:00 PM',
          arrival: '3:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 128',
          from: 'Jabalpur',
          to: 'Rewa',
          departure: '2:00 PM',
          arrival: '4:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 129',
          from: 'Srinagar',
          to: 'Leh',
          departure: '3:00 PM',
          arrival: '9:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 130',
          from: 'Panaji',
          to: 'Margao',
          departure: '4:00 PM',
          arrival: '6:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 131',
          from: 'Agartala',
          to: 'Imphal',
          departure: '5:00 PM',
          arrival: '10:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 132',
          from: 'Aizawl',
          to: 'Silchar',
          departure: '6:00 PM',
          arrival: '12:00 AM',
          availability: 'Available'
        },
        {
          trainName: 'Express 133',
          from: 'Shillong',
          to: 'Guwahati',
          departure: '7:00 PM',
          arrival: '10:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 134',
          from: 'Kohima',
          to: 'Dimapur',
          departure: '8:00 PM',
          arrival: '11:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 135',
          from: 'Itanagar',
          to: 'Tezpur',
          departure: '9:00 PM',
          arrival: '12:00 AM',
          availability: 'Available'
        },
        {
          trainName: 'Express 136',
          from: 'Gangtok',
          to: 'Darjeeling',
          departure: '10:00 PM',
          arrival: '2:00 AM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 137',
          from: 'Dispur',
          to: 'Dibrugarh',
          departure: '6:00 AM',
          arrival: '12:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 138',
          from: 'Raipur',
          to: 'Bilaspur',
          departure: '7:00 AM',
          arrival: '10:00 AM',
          availability: 'Available'
        },
        {
          trainName: 'Express 139',
          from: 'Ranchi',
          to: 'Dhanbad',
          departure: '8:00 AM',
          arrival: '12:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 140',
          from: 'Shimla',
          to: 'Kullu',
          departure: '9:00 AM',
          arrival: '2:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 141',
          from: 'Chandigarh',
          to: 'Ambala',
          departure: '10:00 AM',
          arrival: '12:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 142',
          from: 'Srinagar',
          to: 'Anantnag',
          departure: '11:00 AM',
          arrival: '1:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 143',
          from: 'Bangalore',
          to: 'Mysore',
          departure: '12:00 PM',
          arrival: '2:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 144',
          from: 'Chennai',
          to: 'Pondicherry',
          departure: '1:00 PM',
          arrival: '4:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 145',
          from: 'Kolkata',
          to: 'Siliguri',
          departure: '2:00 PM',
          arrival: '10:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 146',
          from: 'Delhi',
          to: 'Amritsar',
          departure: '3:00 PM',
          arrival: '8:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 147',
          from: 'Mumbai',
          to: 'Pune',
          departure: '4:00 PM',
          arrival: '7:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 148',
          from: 'Hyderabad',
          to: 'Warangal',
          departure: '5:00 PM',
          arrival: '8:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 149',
          from: 'Patna',
          to: 'Gaya',
          departure: '6:00 PM',
          arrival: '9:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 150',
          from: 'Lucknow',
          to: 'Varanasi',
          departure: '7:00 PM',
          arrival: '11:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 151',
          from: 'Kanpur',
          to: 'Allahabad',
          departure: '8:00 PM',
          arrival: '10:00 PM',
          availability: 'Waiting List'
        },
        {
          trainName: 'Express 152',
          from: 'Indore',
          to: 'Ujjain',
          departure: '9:00 PM',
          arrival: '11:00 PM',
          availability: 'Available'
        },
        {
          trainName: 'Express 153',
          from: 'Jabalpur',
          to: 'Katni',
          departure: '10:00 PM',
          arrival: '12:00 AM',
          availability: 'Available'
        },
        {
          trainName: 'Express 154',
          from: 'Jodhpur',
          to: 'Jaipur',
          departure: '6:00 AM',
          arrival: '12:00 PM',
          availability: 'Waiting List'
        }
      ];
      
  
    sampleData.forEach(train => {
      const trainCard = document.createElement('div');
      trainCard.className = 'train-card';
  
      trainCard.innerHTML = `
        <div class="train-info">
          <h2>${train.trainName}</h2>
          <p>${train.from} to ${train.to}</p>
          <p>Departure: ${train.departure}</p>
          <p>Arrival: ${train.arrival}</p>
          <p>Status: ${train.availability}</p>
        </div>
        <button class="book-button">Book Now</button>
      `;
  
      resultsSection.appendChild(trainCard);
    });
  });
  