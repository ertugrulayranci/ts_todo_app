

import {useEffect, useState} from "react";
import useJsonPlaceholderApi, { JsonPlaceholderApi, JsonPlaceholderUserType } from "../../hooks/user.JsonPlaceholderApi"
import { AxiosResponse } from "axios";
import { Col, Row } from "react-bootstrap";

export default function JsonPlaceholderPage() {
  const api: JsonPlaceholderApi = useJsonPlaceholderApi();
  const [users, setUsers] = useState<JsonPlaceholderUserType[] | null>(null);

  useEffect(() => {
    (async () => {
      // burası immediate call function içeriğidir

      console.log("Api isteğinde bulunacağız...");

      const result: AxiosResponse<JsonPlaceholderUserType[]> =
        await api.users();

      console.log("Result:", result.data);

      setUsers(result.data);
    })();
  }, []);


   return<>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">User List</h1></div>

            <Row>
              {
                users === null ?(
                  <div>Loading</div>
                ): (
                  users.map((item,index)=>{
                    return <Col sm="4">
                      {item.name}
                    </Col>

                  })
                )
              }
              
            </Row>
    </>
}