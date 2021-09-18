import { LikeView } from "./ScHomePage";
import ProfilePoint from "../Nav/ProfilePoint";


const LikeName = ({user}) => {
    return(
        <LikeView>
                <ProfilePoint key={user._id} user={user}></ProfilePoint>
        </LikeView>
    );
}

export default LikeName;