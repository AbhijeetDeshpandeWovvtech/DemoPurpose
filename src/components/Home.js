import React from 'react';
import {View, Text, Button} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux'
import {addToCart} from '../service/actions'

function Home(props) {
  return (
    <View style={{alignItems : 'center', marginTop : 200}}>
      <Text style={{fontSize: 30, marginVertical : 20}}>Home Component</Text>
      <Button title="Add to cart" />
      {/* <AntDesign name="feed" size={30} color="#900" /> */}
    </View>
  );
}

// const mapStateToProps=(state)=>{
//     // data:state.cardItems
//     const {cardItems} = state;
//     return {cardItems};
// };
// // const mapDispatchToProps=dispatch=>({
// //     addToCartHandler:data=>dispatch(addToCart(data))

// // })
// export default connect(mapStateToProps)(Home)

export default Home;
