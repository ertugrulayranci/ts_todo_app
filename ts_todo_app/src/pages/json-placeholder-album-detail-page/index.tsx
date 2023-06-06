import { useParams } from "react-router-dom";
import useJsonPlaceholderApi from "../../hooks/user.JsonPlaceholderApi";


export type AlbumParamsType={
    userId: string | undefined;
    albumId: string |undefined;
}


export default function JsonPlaceholderAlbumDetailPage(){
    const params =useParams <AlbumParamsType>();
    const api =useJsonPlaceholderApi();

    const[user,setUser]= useState<JsonPlaceholder
    const[photos,setPhotos]= useState<JsonPlaceholderAlbumPhotosPage>
    if(!params.userId || !params.albumId){
    return(
    <>
    <h1>User ID değeribulunamadı lütfen mail atınız</h1>
    </>)
}
    const promises=[];

    promises.push(api.getUser(parseInt(params.userId as string)))
    promises.push(api.albums(parseInt(params.userId as string)))
    promises.push(api.albumPhotos(parseInt(params.userId as string)))
    
    return <>
   album details page
    </>
}