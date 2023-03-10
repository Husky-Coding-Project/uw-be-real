import React from 'react';
import { Dimensions, StyleSheet, FlatList, Image, View, Text } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import styles from './profile-style.js';

const posts = [
  {
      "author_username": "alan.ly",
      "author_netid": "4",
      "author_icon": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
      "author_streak": 13,
      "author_streak_emoji": "😊",
      "post_id": 1,
      "post_front": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766374296006747/image.png",
      "post_back": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766498959114261/image.png",
      "post_time": 1672262161,
      "post_interactions": [
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930204864693/peter.jpg",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930418761838/andrew.jpg",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://media.licdn.com/dms/image/C4E03AQGtT25maW04tg/profile-displayphoto-shrink_100_100/0/1516338583025?e=1677715200&v=beta&t=7qDzsBljaYZ1nGEvy84CH0fwmUP9bH0MozgNGDA3i3o",
          "https://media.licdn.com/dms/image/D5635AQEyzxEuRPXMRQ/profile-framedphoto-shrink_100_100/0/1669091968868?e=1672869600&v=beta&t=_tiCxrVddUT8dLCwblDQZb0IxGqTQpykWH9HkTs7wcY",
          "https://media.licdn.com/dms/image/C5603AQERNWw2wbOJYA/profile-displayphoto-shrink_100_100/0/1647314550869?e=1677715200&v=beta&t=7BFmGWfylfhuGHVpoKr9WCgMls0v5Zx-kzye39Ky9CA",
          "https://media.licdn.com/dms/image/C5603AQFcfpzBSI61pg/profile-displayphoto-shrink_100_100/0/1659928232261?e=1677715200&v=beta&t=j8D8kDOmqnxws9xvR66GiVH_KQ3wmaSPXm3lGoNAum8"
      ],
      "post_comments": 16
  },
  {
      "author_username": "haidang",
      "author_netid": "6",
      "author_icon": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770381445972048/image.png",
      "author_streak": 15,
      "author_streak_emoji": "🔥",
      "post_id": 3,
      "post_front": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770153519104122/image.png",
      "post_back": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770258129231952/image.png",
      "post_time": 1672262179,
      "post_interactions": [
          "https://media.licdn.com/dms/image/C5603AQERNWw2wbOJYA/profile-displayphoto-shrink_100_100/0/1647314550869?e=1677715200&v=beta&t=7BFmGWfylfhuGHVpoKr9WCgMls0v5Zx-kzye39Ky9CA",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930204864693/peter.jpg",
          "https://media.licdn.com/dms/image/C4E03AQGtT25maW04tg/profile-displayphoto-shrink_100_100/0/1516338583025?e=1677715200&v=beta&t=7qDzsBljaYZ1nGEvy84CH0fwmUP9bH0MozgNGDA3i3o",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930418761838/andrew.jpg",
          "https://media.licdn.com/dms/image/D5635AQEyzxEuRPXMRQ/profile-framedphoto-shrink_100_100/0/1669091968868?e=1672869600&v=beta&t=_tiCxrVddUT8dLCwblDQZb0IxGqTQpykWH9HkTs7wcY",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://media.licdn.com/dms/image/C5603AQFcfpzBSI61pg/profile-displayphoto-shrink_100_100/0/1659928232261?e=1677715200&v=beta&t=j8D8kDOmqnxws9xvR66GiVH_KQ3wmaSPXm3lGoNAum8"
      ],
      "post_comments": 32
  },
  {
      "author_username": "alannnnn",
      "author_netid": "4",
      "author_icon": "https://media.licdn.com/dms/image/C5603AQERNWw2wbOJYA/profile-displayphoto-shrink_100_100/0/1647314550869?e=1677715200&v=beta&t=7BFmGWfylfhuGHVpoKr9WCgMls0v5Zx-kzye39Ky9CA",
      "author_streak": 23,
      "author_streak_emoji": "😊",
      "post_id": 5,
      "post_front": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766498959114261/image.png",
      "post_back": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766374296006747/image.png",
      "post_time": 1672262181,
      "post_interactions": [
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://media.licdn.com/dms/image/C4E03AQGtT25maW04tg/profile-displayphoto-shrink_100_100/0/1516338583025?e=1677715200&v=beta&t=7qDzsBljaYZ1nGEvy84CH0fwmUP9bH0MozgNGDA3i3o",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://media.licdn.com/dms/image/C5603AQFcfpzBSI61pg/profile-displayphoto-shrink_100_100/0/1659928232261?e=1677715200&v=beta&t=j8D8kDOmqnxws9xvR66GiVH_KQ3wmaSPXm3lGoNAum8",
          "https://media.licdn.com/dms/image/D5635AQEyzxEuRPXMRQ/profile-framedphoto-shrink_100_100/0/1669091968868?e=1672869600&v=beta&t=_tiCxrVddUT8dLCwblDQZb0IxGqTQpykWH9HkTs7wcY",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930204864693/peter.jpg",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930418761838/andrew.jpg"
      ],
      "post_comments": 3
  },
  {
      "author_username": "haid",
      "author_netid": "6",
      "author_icon": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770381445972048/image.png",
      "author_streak": 15,
      "author_streak_emoji": "🔥",
      "post_id": 6,
      "post_front": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770153519104122/image.png",
      "post_back": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770258129231952/image.png",
      "post_time": 1672262199,
      "post_interactions": [
          "https://media.licdn.com/dms/image/C5603AQERNWw2wbOJYA/profile-displayphoto-shrink_100_100/0/1647314550869?e=1677715200&v=beta&t=7BFmGWfylfhuGHVpoKr9WCgMls0v5Zx-kzye39Ky9CA",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930204864693/peter.jpg",
          "https://media.licdn.com/dms/image/C4E03AQGtT25maW04tg/profile-displayphoto-shrink_100_100/0/1516338583025?e=1677715200&v=beta&t=7qDzsBljaYZ1nGEvy84CH0fwmUP9bH0MozgNGDA3i3o",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930418761838/andrew.jpg",
          "https://media.licdn.com/dms/image/D5635AQEyzxEuRPXMRQ/profile-framedphoto-shrink_100_100/0/1669091968868?e=1672869600&v=beta&t=_tiCxrVddUT8dLCwblDQZb0IxGqTQpykWH9HkTs7wcY",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://media.licdn.com/dms/image/C5603AQFcfpzBSI61pg/profile-displayphoto-shrink_100_100/0/1659928232261?e=1677715200&v=beta&t=j8D8kDOmqnxws9xvR66GiVH_KQ3wmaSPXm3lGoNAum8"
      ],
      "post_comments": 32
  },
  {
      "author_username": "alan.lyy",
      "author_netid": "4",
      "author_icon": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
      "author_streak": 13,
      "author_streak_emoji": "😊",
      "post_id": 7,
      "post_front": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766374296006747/image.png",
      "post_back": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766498959114261/image.png",
      "post_time": 1672262211,
      "post_interactions": [
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930204864693/peter.jpg",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930418761838/andrew.jpg",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://media.licdn.com/dms/image/C4E03AQGtT25maW04tg/profile-displayphoto-shrink_100_100/0/1516338583025?e=1677715200&v=beta&t=7qDzsBljaYZ1nGEvy84CH0fwmUP9bH0MozgNGDA3i3o",
          "https://media.licdn.com/dms/image/D5635AQEyzxEuRPXMRQ/profile-framedphoto-shrink_100_100/0/1669091968868?e=1672869600&v=beta&t=_tiCxrVddUT8dLCwblDQZb0IxGqTQpykWH9HkTs7wcY",
          "https://media.licdn.com/dms/image/C5603AQERNWw2wbOJYA/profile-displayphoto-shrink_100_100/0/1647314550869?e=1677715200&v=beta&t=7BFmGWfylfhuGHVpoKr9WCgMls0v5Zx-kzye39Ky9CA",
          "https://media.licdn.com/dms/image/C5603AQFcfpzBSI61pg/profile-displayphoto-shrink_100_100/0/1659928232261?e=1677715200&v=beta&t=j8D8kDOmqnxws9xvR66GiVH_KQ3wmaSPXm3lGoNAum8"
      ],
      "post_comments": 16
  },
  {
      "author_username": "hoeli",
      "author_netid": "1",
      "author_icon": "https://media.licdn.com/dms/image/C5603AQFcfpzBSI61pg/profile-displayphoto-shrink_100_100/0/1659928232261?e=1677715200&v=beta&t=j8D8kDOmqnxws9xvR66GiVH_KQ3wmaSPXm3lGoNAum8",
      "author_streak": 2,
      "author_streak_emoji": "",
      "post_id": 8,
      "post_front": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770258129231952/image.png",
      "post_back": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770153519104122/image.png",
      "post_time": 1672262232,
      "post_interactions": [
          "https://media.licdn.com/dms/image/C5603AQERNWw2wbOJYA/profile-displayphoto-shrink_100_100/0/1647314550869?e=1677715200&v=beta&t=7BFmGWfylfhuGHVpoKr9WCgMls0v5Zx-kzye39Ky9CA",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930204864693/peter.jpg",
          "https://media.licdn.com/dms/image/C4E03AQGtT25maW04tg/profile-displayphoto-shrink_100_100/0/1516338583025?e=1677715200&v=beta&t=7qDzsBljaYZ1nGEvy84CH0fwmUP9bH0MozgNGDA3i3o",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930418761838/andrew.jpg",
          "https://media.licdn.com/dms/image/D5635AQEyzxEuRPXMRQ/profile-framedphoto-shrink_100_100/0/1669091968868?e=1672869600&v=beta&t=_tiCxrVddUT8dLCwblDQZb0IxGqTQpykWH9HkTs7wcY",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057770381445972048/image.png"
      ],
      "post_comments": 32
  },
  {
      "author_username": "andrewkim",
      "author_netid": "2",
      "author_icon": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930418761838/andrew.jpg",
      "author_streak": 23,
      "author_streak_emoji": "😊",
      "post_id": 9,
      "post_front": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766374296006747/image.png",
      "post_back": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766498959114261/image.png",
      "post_time": 1672262265,
      "post_interactions": [
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930204864693/peter.jpg",
          "https://media.licdn.com/dms/image/C5603AQERNWw2wbOJYA/profile-displayphoto-shrink_100_100/0/1647314550869?e=1677715200&v=beta&t=7BFmGWfylfhuGHVpoKr9WCgMls0v5Zx-kzye39Ky9CA",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://media.licdn.com/dms/image/C4E03AQGtT25maW04tg/profile-displayphoto-shrink_100_100/0/1516338583025?e=1677715200&v=beta&t=7qDzsBljaYZ1nGEvy84CH0fwmUP9bH0MozgNGDA3i3o",
          "https://media.licdn.com/dms/image/D5635AQEyzxEuRPXMRQ/profile-framedphoto-shrink_100_100/0/1669091968868?e=1672869600&v=beta&t=_tiCxrVddUT8dLCwblDQZb0IxGqTQpykWH9HkTs7wcY",
          "https://media.licdn.com/dms/image/C5603AQFcfpzBSI61pg/profile-displayphoto-shrink_100_100/0/1659928232261?e=1677715200&v=beta&t=j8D8kDOmqnxws9xvR66GiVH_KQ3wmaSPXm3lGoNAum8"
      ],
      "post_comments": 13
  },
  {
      "author_username": "lilpete",
      "author_netid": "3",
      "author_icon": "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930204864693/peter.jpg",
      "author_streak": 32,
      "author_streak_emoji": "🔥",
      "post_id": 10,
      "post_front": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770153519104122/image.png",
      "post_back": "https://cdn.discordapp.com/attachments/1034184646067486720/1057770258129231952/image.png",
      "post_time": 1672263267,
      "post_interactions": [
          "https://media.licdn.com/dms/image/C5603AQERNWw2wbOJYA/profile-displayphoto-shrink_100_100/0/1647314550869?e=1677715200&v=beta&t=7BFmGWfylfhuGHVpoKr9WCgMls0v5Zx-kzye39Ky9CA",
          "https://media.licdn.com/dms/image/D5635AQEyzxEuRPXMRQ/profile-framedphoto-shrink_100_100/0/1669091968868?e=1672869600&v=beta&t=_tiCxrVddUT8dLCwblDQZb0IxGqTQpykWH9HkTs7wcY",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png",
          "https://media.licdn.com/dms/image/C4E03AQGtT25maW04tg/profile-displayphoto-shrink_100_100/0/1516338583025?e=1677715200&v=beta&t=7qDzsBljaYZ1nGEvy84CH0fwmUP9bH0MozgNGDA3i3o",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057770381445972048/image.png",
          "https://cdn.discordapp.com/attachments/1034184646067486720/1057766930418761838/andrew.jpg",
          "https://media.licdn.com/dms/image/C5603AQFcfpzBSI61pg/profile-displayphoto-shrink_100_100/0/1659928232261?e=1677715200&v=beta&t=j8D8kDOmqnxws9xvR66GiVH_KQ3wmaSPXm3lGoNAum8"
      ],
      "post_comments": 63
  }
]

const Profile = ({navigation, route}) => {

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(posts)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setProfilePhoto(json.author_icon);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //     setProfilePhoto(    posts.user1.author_icon        );
  // }, []);

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{uri: 'https://cdn.discordapp.com/attachments/1034184646067486720/1057766744145539102/image.png'}}
      />
      <Text style={styles.name}>Alan.ly</Text>
      <Text style={styles.caption}>This is a caption.</Text>
    </View>
  );
}


// const styles = StyleSheet.create({
  
// });

export default Profile;