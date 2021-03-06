import React from "react";
import {HashRouter, Route} from "react-router-dom";
//BrowserRouter는 /#/같은 Url이 없어서 깔끔하지만 HashRouter보다 
//Github pages에서 사용하기에 설정이 복잡하다.
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

// path / 를 exact를 해주지 않으면 /home이 정의가 되어있지않아도 계속 해서
//랜더링 해서 페이지에 떠 있게 된다.
function App(){
  return (
    <>
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    
    <footer></footer>
    </>
  );
}

export default App;

//proptype을 통해 prop의 타입을 다 체크할 수 있다.

// //Class component를 사용하고 state를 다루고 life cycle을 봤다.
// //react class coponentd에는 render외에도 life cycle method를 갖고 있다.
// //Mounting-constructor(JS에서 옴), Updating, Unmounting
// //constructor - componenetDidMount - render - 
// //setState - 발생하면 - componentDidUpdate - render - 최종: Unmount
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     console.log("hello");
//   }
//   state = {
//     count: 0
//   };
//   add = () => {
//     //this.state.count = 1;
//     //이런 식으로 직접 호출해서 변경하는 것은 render를 refresh해야되서
//     //직접 state를 바꿀 수 있게 하지 않는다.
//     //this.setState({count: this.state.count + 1});
//     //또한 state를 이렇게 사용하는 것을 추천하지 않는다.
//     this.setState(current => ({count: current.count +1}));
//     //이게 외부의 상태에 의존하지 않는 가장 좋은 방법
//     //state를 set할 때, 함수의 형태로 가져와서 set하는 방법
//     //set state를 호출할 때 마다 react는 새로운 state와 함께 render를 호출!!
//   };  
  

//   minus = () => {
//     this.setState({count: this.state.count - 1});
//   }
//   render() {
//     console.log()
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )
//   }
// }

// // fuction component를 사용해서 static data를 다루는 예제 
// const lanILike = [
//   {
//     id:1,
//     name: "Java",
//     image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAwFBMVEX////iGCLgAAAAYrHhABAFbrbtjI8AbLUAZbIAYLDhABEAabQAZrPvlZfiFB8AY7L0vb7hAAnxp6nhChjP3u0AVaz97/D3zM3+9vboXmMAWK3y9/sAXK/e6fMAUqv40tPD1unnUVb75ebzsrTkNDvqbXH3zs/lOUDren3mSU/thonpZWno8PeStNd+qNHztbesxuBNi8OfvdxXkcbwn6HjISo9g8CHrdNqm8vH2Or63N3kKzPnTlPnWV3rdXgre7wG8QrfAAAH0UlEQVR4nO2d+1eyTBDHY5UAUQzh8YYmWnYTCC8ZWcb//1+9M8vFa6V2nod4m88PBradM+d7ZndmB5o9OyMIgiAIgiAIgiAIgiAIgiCI30I9awPyTW2QtQW5prfM2oJcM2A0fb/BgF1kbUKeGbBK1ibkmQZ7yNqEPFNh51mbkGdeWS1rE3JMj7Fe1jbkmHujmLUJOeaKFWnpO5kB0yhrPpnmk6aT853MtaEJWduQW5rXhsAWWVuRVwYCqEc534k0mCawu7UvmlT4O5wZqjdc3V+MyBEPZ8SENfUGD6zVzNKcfDF4KoJ6SaWl12fGTab25Atc9rQkaizeGJWsjqHG1YsLBXdM1xvZ2pMvzmHZM56irdqNUdTvadU7ggdU7zaSDMLvevQlvqSC6l1H16DkRuZHfEUD1NNKie8JpVHG9uSMogYZSxQ1ekzQtIzNyRngcEIpnq+3sO24ytacvHGLzhcHXdx3UNA9CowbrejyoSRoT9lakztAPj3ebfQN8L5srckd17Dexa+03BtpECEOBGZsIt8S5DPo5bSjWLB08laKArgfbXePomUkoQOUxAw6W3PyRp2l2QomMbTtOJJa+loB7t9g+j5ma0/eGBWT9wpGJZy+lLwcxzVLJqymkfsdTVNLcpcBTl96RehI6qUkelxhBYEedBxJnfXjqyequpxAPXnMhrsQqrocTV2Pom+lSG+5nEIzWvFGrLX5vdXtWhmYkwcc07dTbfiUbaaLYIQbiu22Mvf/sWE/H9Odt+eT7ta3d+8bt10HPmxRLYz/mV15oOupbXGyOykv9mfMoVQm/VLsuaKW987HjZfCndQ1HUUs2H/ZqNwwVyRREj8ZYJn2JAjFNYHHkjr963blA6ssq6CfMnb9F7PrOI5lwUfXfLH9iesFY0npdDowtdf/5ln9VO/fhT9VFbksVwsKUIBPfpEgh8HkZWtZ9FRpno2tPxPnxQdPm89FSVXLZfCtcD4OPHdim86+4aKoev/axP8PdlXsbKc4xMGIkkzOt4N94GZiqlLat4MZlg8bGMgFylq2MTtS2dz3C8v0PXftfqwok33jfjcTRRSrYuBNfBvSP8C07YkbzCWlWlbleRIpTLUTUMVlD16nLImYtsiQAQJVWS6rqgQZtVouVMdcPyu49Cjk7sdxQ/Q0LpkoShJPAeVCNfT8WDJ3TJWqTzF9N5iGYSiKYYh5s/+yljbvzaAJgvgJmHbWFuQYZ3xJy9vpiKoouvb6gzTH9J/HImXJByGBfKpcUApSOAZCqYCJjCSWpT2PQYhtnLCKGR/P+ThihFpQqMByCP5YkdVUNlROlRXRs7O26ydj2a4XuFZy8zyWsGTPi/bi9NmmaPIJziS8DHeejltOt9t1PlrwLNq6RXSnSic43r065JGIp6iq+/Wwbab0kBIJqhBk53trpB9i2cFl8JfsyRmYJotSASLrIZPR6tqTQLxUvGgwlf2cKU+LJUhO5JDXmU2IF2sBw7Kw6IwvG0xDtdNpt8PnxFd9ygTPsL7nTSWlIMdUIV3BMnN0Uy0oPH9BOhvvGtghLX8rYGuLb7OEkswFKxSqvFwPNzLs3wLXf1mfqqZX/kOP2vbDM76uyR8WObtLojmZyp32+Lhw8//nwxQ5BQNHiC9bhS5FjR38YDxNgwfX0sIX1UyMHF4wL3cQefxsU+3lAxx7wiPsn0vkT0S73e4oUjj1XH//y1bENuB1uPyZfAX8eloTBEEQv4lF46ZBzZhP5oFRV9dvcF4USvSv9idD8n0Lku9bkHzf4hvyUYODDfluZu/9t/5wxv8HtTmr1WbJf6M24Jr3UWteVIZv9/33GkjXrFXo6MVEvsWQMd1A9OhIQIHpaf+RVnTdWDJW5GMYdodYPFJnRJCP9wi6YqAbgg0j8YtKcdX58FXjJ+6cJ2M06ssUk8g3YK1ar96sN3jDzWbUuy/p38KiFqYNNrxawJgLkJO6+nES+VaBAHuXomuV0h6moKTxtj6kqWvU05STypcy0wUdY8JdSTCiLhpXulDcjBLvhkAnHiO78j2ySKwGEzSdf4NibTYwhYWR5EN25buI5eMrHj9gR9C2uzeDh5J8yLp8i6uH4bJ/q8XyjYyo81wdlr60k1Cv9jDs99d6O/9uVvI9vkJWpxeLEHkj+WAW8/MV4ac+i0bPNKbHY0g+JJWvxTSD6ffL1n3ifXWcvYto6eMV1eYt00rM6C9bt+R9EYl8d7DitfhhlOnahz3X8UrXtNfoviSwOy4krX0xsXyDOLU74902Y/lAJO0WjzyJ7iEUJ+d4UOSNieWrQbIX73BX8g34buO8FM9dbCMZ58ozki8ilg9+JLvYx1Q+vtftPWnggkhrddYsTd6YWD6YjUl73HcjlQ9+qfXTI2YhkUk8tE+7jgiYkSjfBYuPRrh4LQqpfD08MyutHFRgKdTQ/a4MSlxiEl/jRSjhnjGj+Lra4Rq85X8cL3Ap1NgrjMFO7CQfgjMS52aDlTRBMwx2W2/pLJHvjmFtNHmMXsNiII7pnz2VSD4k3X4NhiXG2BLiR204TMrMvdFwOFw9Re+1sFg6gkl+vhzRKSjYF1cQUu9q1j8dG42hB0RrYGx9zdqI3ILHmdBTi1Op4ZlsdJTOieBBstsd1YnDWTLq5v8dKhRHCYIgCIIgCIIgCIIgCIIgiF/Of1kVnXunENljAAAAAElFTkSuQmCC",
//     rating: 5
//   },
//   {
//     id:2,
//     name: "JavaScript",
//     image: "data:image/png;base64,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",
//     rating: 4.9
//   },
//   {
//     id:3,
//     name: "Python",
//     image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhISFRASFRIVFhAVFRAVFRAVFRIWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zOjMtNyg5LisBCgoKDg0OGhAQFysdHR0tLi0tLSstKy0tLS0tLS0tLSstLi0tLS0tLS0tLSsrLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALQBFwMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIEBgcFAwj/xABJEAACAQIDBQUFAwcICgMAAAAAAQIDEQQSMQUhQVFhBxNxgZEGobHB8BQi0RUjMnJztPFCUoKEk7Kz4SQlJjU2Q1R0wtIXMzT/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAKREBAAIBAwMDBAIDAAAAAAAAAAECEQMEIRIxQQUyUSJhcbGB8CMkM//aAAwDAQACEQMRAD8A5gS/miifxR7HjVHQTf8AAcQitQhegeaKF5ACBMG2F/AAfUX4Md/Ad/AAd+gch+I1EIlLcNPxHHQlWAeYEvHwDd9IItFBLiPjuC28aiECiNjBoATJlEpIJIAUQbDMS38gikyiIIpsomQ4g2gi0FPj5BxFm3hJoIcSfP36lqSJbX0gKS3BvGmiiolPmAVNAAxrkv5jt4A18TDocNAjx8QjoOIA2ESZodNANCepURc/EIJfAchPiWArXCLCOgQKJSKSX1ch6IqmAKJOU+kePiPKETBfIsS19CgAlXKFHQIIsAj+IR+bKCI1q/IFqwWr8gFJgkx23lATv6DTEt/EpIAaEm9BLfxB77APf0GmKO4p2KgsK1vAcWMCZ6AKYEV8Iu4mKMeZSRlsZRpC1E7BFS0GRm3FKSANBfApsN4EsbfIe8aZQCiMIBCsO/QErg1YBxGJag9QHYYsviLL4hDzCT6Md+gKXRlAmOKCKCWgAEULdusWBK19ChLX0KCE4olqw1IipqFfTKKXDz+A6eg3qvP4FRH4XHb6sNx8AydF7yAUfqxZCj4bvEsqJq6AFTQCSsMZIIsaIsZbVHj4g17xxCXzAm2o7cAfEpa+QA9UDY2hb/EqC/gD1QJeAOIFCgAeAAtwOW4pMTfABKXwHm3j4+QcfIAzfW8MxQmyoWXqNR8SfUcV1YU4sWbwHJcAt19yCFm8C4sWXr7kJKz8QGtX5DEtX5DlyAEhNXY4fAa1KggJK/EcCUunvAuOgxQ0GEKPEYo8SgJy3uAra/iAVj3Gif8AIcDDaiVvCQJMoMuvUbQWZkYfAVam+EJNLitL+L3CIykyzdi4GFRTqVW1Tpq7S1e5v4L3ns7Po4apHNCkrJ2akrtO1+LfNGJsenUoxnGdCclNrTu2rWs07yMulXyLLDD1Irku7/8AY9NIiIhwvOZXV2bRf/LivDd8DXdq7PVKStdxle19VbVG0TkebjsBVxE4UqMHOo87UE4ptJJvVpaDWisVmZ4waczNsNbtYD19p+zmLw8c9fD1IQvbO1FxTel3FtLzPJj8zyVvW8ZrOY+z0TEx3gKCKQHp7G9nsVi7/ZsPUqpbnJJRgnydSTUb9Lmuycy8xoEjb6/ZhtOMXJ4eMrb8kKtJy9Lq/kajVpuEnGUZRnFtOMlKMotbmmnvT6CJiexMTHcCienHYGJ+zPFujJYVZfz0ssVLNNQWWLeaW96pWPM08GUxg0z7YHB1K01To051KktIQi5SfN2XDqZlP2dxTwzxiot4SN/z+anbdPI/u5s36W7Q3TsW2PXeLWL7t/Zslan3t4Wz/d+7a+b3WM2tiMrWuZw0HaOBqUKjpVYuFWDSlBuLcW4ppNptaNHUezTDQ/I+0KmSPeXxUe8yrPlWEptRza2u27dWeD2mezOLWLxWL7iX2XPCXfZqVsuSEL5c2b9LdobF2Zv/AFJtD9bF/udIxac1y3SuL4/LkL4c+RXFeZ7OyfZHH4iKnRwlWcGlabyU4yXNSqOKkuqMbbGw8ThJKOJoVKTadnLK4y55Zxbi30TOuY7OeJxl561fkIqmm3uTbbSSW9vgklzNrwXZrtGrDOsNkTV0qk4Qk/6Ld14NITMR3SImezU1r4jlzPS2z7P4jByUcTQnTb/Rbs4z/VnFuL8L3PNn818RCTwHuEvFGy7N9gdo4hKUMLOMHvUqrhTv/Rm1L3Ebc9iMdhIOpWofmlrUg4TjH9bK7xXVqxOqM4yvTOM4a9HluLIy/VirPmaZEeISYlF8xuL5+4oS8UA8nh6CIMZr5DsJ6ehRl0KOgxZR5UEfXC0c84w/nSjHwu7G/RiopRirRirJLgjR9jtKvT/WXv3L3s3Scj06HaXDW7wU5HwnIy9lbMq4us6NFxioRUqlaSclSUm1FKKazSdnZXWjNl/+OOeNrf2VD8Dy7n1Pb6F+i9ufw6aW01dSvVWOGkTkex7BQctoU2lup0q0pP8AmqSUI38W/cz3H2bx44ytb9nQXyNj2DsKjg4ONJPNNpzqzeadRpWWZ8lwSslc+T6h61t76FqaeZm3HZ7dtsNSupFrdoeljKMakJU5pShOLjKL0cWrNH5vxuFdKrVpPWlUqU2+eSTjf3H6PlI4B7XTTx2Ja0dap6p2l70zwegaszqXr4xl6fUKRFay8qK+R2Ttgx9XB0MJQwk5YejNVU4UX3e6Cp5UpR3xX3no9995xyGq8V8TrXb1pgv6z8KJ+jt7ofPp7Zc99nvarE4SvCvGvVlFSXeU5TnKNWF/vqUW7N2vZ6pm99uWxILucdTVnU/NVGv5by5qU31tGSv+ryOUVFufX4nbu2J5Nl4eEv0+9oRt1jRnm+BLcWha81nLA2r/AMLU/wBXD/vcTkU9Dru1P+Fqf6uH/e4nJNS6fn8pq+Pw6zs9/wCys/Ct+/SPE7FsXU+3xpd5U7ruq0u6zz7vN9372S+W/Wx7uzl/srPwrfv0jXOxf/eUf2Nb/wATPizc+6rG7Sdo1/yhi6Xf1u5zxXc97U7u3dwdu7vltffpqbr2S4ju9k4yplU+7q4ieSWk8uFpPK+jtY5/2lJflPF/tI/4UDeOzL/cm0P1sX+50i29kfwlf+k/y0TavtvtDETzyxVWmtVToSnRhHpaDvL+k2dHoYx7T2BWnibTrUI1fzlkm6lCOeE92jcWk7a3lzscWsvq5172DX+oMd4Yz93iXUiIiMM6dpmZz8MPsb2JTtW2hWSaw9407rdCShnqVPFRcUuV5Gmbe9rsXiqsq0q9aCbbhShUnCNKP8lRUWt9v5WrOi9li73Y+LoQ/wDszYmNuP5zDxyv4+hxuD3LX0FebTktxWMOy+wG0Pyvgq+BxrdSdNRy1nZzyyUlCd3rOEov73FNXvvv4vZBsuK2jXhWhCVTDQmk2k8lSFZQco30eqv1Pv2D026+KlZ5Y0qUX4ynJr+6zL7Ma6qbY2hOP6MniGnzTxW5+hm3HVEN156Zlo/tptzE1MbiVPEVnCnXrQhBTlGEIwqyjFKMbLRLfqzoHYxtytiI4jC4icqsKcYSg6jc5KM3KM4Ny3uO5WT0u1ppzD2oX+nYv/ucT/jzN87CF/pGJ/ZUv78jV4joY07T1uc7Sw6hWqwjfLCrVhFXe5Rm4r3Ix8vV+pmbd/8A01/29f8AxZGD62OrkrL1fqGXq/Un1twFfxuEXl6v1AoCow7dGO5RH4mHQ7c/QElwHxHIAhOzT/lRaa8U7o22htOnOKeaKfGLaTT8zUXqNas3S81YtWLOydlc0/tbTTvUo71v0oo3mUjm/YzUXdYlXV+8pu3Gzg0n7n6HQpSPxHq1/wDbv/fEPu7Ov+GrDe28N/1OH/taX4kPbWH/AOoof2tL8TX/AGvxeFwFKNT7FRqZ5qCjkpQS+65NuWR23J7rGp9pcaLpYOpSpQpd9GdTKoQhLLKFNpSSWqzWM7fZ117Uj6oi+YiePEZa1NadOJ7TMeOfLd9ve1uGw9KU1WpTqWeSlCcZSnK266i3ZX1Zw+U3JuUneUm23zbd2/VktW5FRR+n2Hp1NpE9M5me8vl7jc21pjPGBBO68V8TvXahg8DWWGp4yvPDzffdzXSvTTSp541Fyd48tNVx4PHVeK+J1nt60wX9Z+FE9l4+qHOk/TLD2J7GbOw1SOJxO1cLWpU2pxpwdOKm4u8c335OSvb7qW/3Gv8AaV7XflGvFU7rC0cyp3VpVJStmqNcL2SSe9Lley1GwzUV5zM5Ym/GIjDp/sJ7UYOrgZbLx8lThaUYVZO0ZRlJzSz6QnGTum925HnYn2DwEJZpbaw3c8oqlKrbkstR3fW3kc+vxv5GRg8NOrNU6UJVKj0hBOUn5InR5icL15jExl2baP2Vez1aOClUnhoKUY1KialOX2lZ5NNLWTlwXgcx9hNvRwOMpYiabpJShUS3yUJqzaXNPK/Jm9e1VP8AJ2wqOAqSX2qvJOUE03FOs609OC+7C/NnKLfwJSMxP3a1LYmPs37tF2Xha8620cNj8NNTUJSwrmlVzWjB5I6vck7NK28zuz/beGpbJxtGrXpQrVJYnJTlOKlPNhacY5YvW7TXkczu+XvBX5e810cYyx185wMp0z2N25hqWxcZQqV6UK8/tWSjKcVOeahFRyxe93e5HNLvl7wu+XvLauWa26Wz9n3tY9nYhyknLD1VGNWC13N5Zx5yjd7uKbPf2r7J4DFVJYjCbTwtKlVbm6NVxi6Tk7ysnJNK7/RaVuZzj4vgPLxYmvOY4WLcYmMum4n2iwmysHPCbPrfaMXWu6mLilkg2suaMtLpboxTdnvb5+f2PbUoYbE1ZV6tOlB0cqlUlGKb7yLsm+NkzQr8kPf095OiMTHydc5ifhn+0FaM8ZiZwalCeIryjJO6lGVWbi0+KaaZufY7tahhq2IliK1OlGVOmoupKMVJqbulfU57FFNmprmMMxbFssnbE1KvWlFpxlWrSjJaNOpJpro0YiV97C75e8I35e8qJgrjtvtw1CG765DWrAoAAqMXMJIsXHxMOhePqCa4FNhFALL6g+pQFRnbD21WwlTvaErSatJNXhNcpriveb7hO1JW/PYaSlzpzTT8pWt6s5o2Fzx7nYbfcTnUrmfnt+nbT3Gpp8Vl0baPabGUWqeFzftZRtfg8sU7+qNG2xtari6jq1pZpWsklaMF/NiuCMNNApDbbDb7fnTrifnv+zV3Gpqe6S3+IK/IMyGmexxEX6nv+0/tdiMfGjHEKm5UO8tOEXFzU8l8yva/3OFtdDwJarzEo8eJMGVibEpDWvkaRLp+Jvce1HGQpqlRpYWilFLPCm3JtK2azeVP+izRYy+roE95mYie7UWmOzKx+Pq16kqtapKpUla85O76Jcl0W4+AojbNMmTm5Be4aBD3lICUrAEeYdeAPQcluAWbp7x5unvQfXuQkA1IctGTx9SpaMqJa3+SFFdBtfAS8vUihcPM+iRC4eZZUkAfOot4EXCCZcBcX4AuHmZbPxaHdcxeJVioLrmF0JjUQFFiT3jigSChsJA0hyVggv6BBoLLyHFbgFJ/Mae4bQJbihJfL5hD5DX4fMIxViIMoW08x5FyHkRQydX4Ba34DtcIYNBl6v1Fa/ggBPqUwsToigenoVJClp6FBEN9A8ipK5LXX4BT5eY2iZTVwlvdgBSfInK+T9Ssq5sMvVkBH4FkZVzYOHVgKSvcYKK5sAPg9WVGIQKI0TQRGKGgA9V5lEvVeY2wBoHYnf8AVgXD/ICrroJNdCwCJSRZMdX5FFAyEyxSQCUS0hZkGZBDAWZcxpgMlalEy1XmBVxNIMgZSgcUNRFl6hl6sIJPd5/MoiUfkWwJW/wG7LgENEKfzQE5NAk9/kW9V5kt7/IihvpyHZ9BSenkXcqJiyU7tfAa1+uQX3rz+BFOWqAJcPrgAHwfQqz6AhO/UjR3CGgo+ZUAB6oJ/MbRLfqAn5eL4hfTege/8AQF5hOX1uE39WDQCocSmydECj1KhtsjvGfSz5+4TjfiBOfwFn8Ay/P3DyEDjPmXZMjICVvcUXHkOSE9SispzfxYKX8RfjfxBfO/gRTcvrkCl4W5il8RfF8iitX4fEcmJR6sTXjx+AQ1foJvw9RKH1YrK+hFK/HkJ2b14FRevmSo3Aq60Dd9IXd9WPJ1ZUNNcCbb15jydWNRAmUl6ATJa+QyK+UXdjcgAjQi7sriAAUJoYBEuA8vVgBVDj1YKAARBJbtS7cRAUkwigAIlaeo2/n8AAB3+XwFw9AAob1XmUABEz0KSEADZMNAACiamggAm/1vFf63jAiqa3Djx+uAAUUTqxAEDVtBzYAFGRAABH//2Q==",
//     rating: 4.8
//   },
//   {
//     id:4,
//     name: "Golang",
//     image: "data:image/png;base64,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",
//     rating: 4
//   }

// ]

// /** Java Script의 map의 기능
//  * array의 각 item에서 function을 실행하고 그 결과로 array로 받는 js function.
//  * const friends = ["one", "two", "three", "four"]
//  * friends.map(current => {
//  *    console.log(current);
//  *    return 0;
//  * })
//  * Old Javascript버젼으로 쓰면 이렇게도 가능
//  * friends.map(function(current) {
//  *    console.log(current);
//  *    return 0;
//  * })
//  * console.log로 찍힌 결과와 [0, 0, 0, 0]을 리턴받은 array를 받는다.
//  */

// //index.js에서 App옆에 두는 대신에 App안에 넣어서 쓰면 사용할 수 있다!!!
// //component를 쓰기 위해서는 항상 import를 해줘야 한다.


// //component는 반복사용가능하고 인자를 전해줄 수 있다.
// //componenet에서 component로 child component로 정보를 전달할 수 있다.
// //jsx와 prop을 통해 component의 정보를 주고 받을 수 있다.
// //props를 가져와서 props.fav를 쓰는 것도 있고 {} 브라켓을 써서 내부정보를 
// //바로 가져와서 쓸 수 있다.

// function Language({name, picture, rating}) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//       {/* img태그는 alt prop을 가지고 있어야 된다 */}
//     </div>
//   );
// }

// Language.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating:PropTypes.number.isRequired
// };
// /** Prop-Types
//  * component에 prop을 전달하는 과정에서 실수가 발생할 수 있다.
//  * image를 picture로 준다거나
//  */

// //이게 바로 React의 Coponent!! HTML을 반환하는 함수!!
// //이것은 fuction component이다.
// function App() {
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {lanILike.map(lan => (
//       <Language 
//         key={lan.id} 
//         name={lan.name} 
//         picture={lan.image}
//         rating={lan.rating}
//         />
//       ))}
//     </div>
//   );
// }

