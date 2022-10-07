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
  address: `Jwagal, Lalitpur, Nepal`,
  phoneNumber: _mock.phoneNumber(index),
  email: "raghavmundara2005@gmail.com",
  photo: "/idk/Profile.png",
  latlng: [27.6936794,85.2818743],
}));
