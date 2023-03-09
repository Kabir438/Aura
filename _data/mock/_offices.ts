import _mock from './_mock';

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Nepal'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: `Biratnagar, Nepal`,
  phoneNumber: _mock.phoneNumber(index),
  email: "raghavmundara080905@gmail.com",
  photo: "/idk/Profile.png",
  latlng: [26.4482124,87.2718072],
}));
