import {useQuery} from "@chakra-ui/react";
import {UserService} from "../services/userService";

export const useProfile = () => {

  const {} =  useQuery(['profile'], () => UserService.getProfile())
}

