import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

function Body() {
  return (
    <>
      <h4>Online ticket booking</h4>

      <Container>
        <Row>
          <Col xs={6} style={{}}>
            <Form class="bd-example">
              <fieldset>
                <legend class="search">Search and Book Tickets</legend>
                <p>
                  <label htmlFor="input">From:</label>&nbsp;
                  <input
                    type="text"
                    id="input"
                    placeholder="boarding point"
                  ></input>
                  <br></br>
                </p>
                <p>
                  <label htmlFor="input1">To:</label>&emsp;&nbsp;
                  <input
                    type="text"
                    id="input1"
                    placeholder="Destination"
                  ></input>
                </p>
                <hr />
                <div>
                  <span>
                    {" "}
                    <label htmlFor="input2">Onward Journey Date:</label>
                    <input type="date" id="input2" />
                  </span>
                  <span>
                    <label htmlFor="input3">Time:</label>
                    <select name="time" id="input3">
                      <option value="any">Any</option>
                      <option value="Before 12PM">Before 12PM</option>
                      <option value="12PM-8PM">12PM-8PM</option>
                      <option value="8PM-12AM">8PM-12AM</option>
                    </select>
                  </span>
                </div>
                <div>
                  <span>
                    {" "}
                    <label htmlFor="input4">Return Journey Date:</label>
                    <input type="date" id="input4" />
                  </span>
                  <span>
                    <label htmlFor="input5">Time:</label>
                    <select name="time1" id="input5">
                      <option value="any">Any</option>
                      <option value="Before 12PM">Before 12PM</option>
                      <option value="12PM-8PM">12PM-8PM</option>
                      <option value="8PM-12AM">8PM-12AM</option>
                    </select>
                  </span>
                </div>
                <hr />
                <div>
                  Adult:
                  <input type="number" id="input6"></input>
                  <label htmlFor="input6">Male</label>
                  <input type="number" id="input7"></input>
                  <label htmlFor="input7">Female</label>
                </div>
                <div>
                  Children:
                  <input type="number" id="input8"></input>
                  <label htmlFor="input8">Male</label>
                  <input type="number" id="input9"></input>
                  <label htmlFor="input9">Female</label>
                </div>
                <hr />
                <Button className="btn btn-primary">Search</Button>
              </fieldset>
            </Form>{" "}
          </Col>

          <Col
            xs={6}
            style={{
              backgroundColor: "grey",
              padding: 2,
            }}
          >
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="https://i.ibb.co/nRqL1K2/download.jpg"
                    alt="Bus 1"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://i.ibb.co/9bQx0HN/hd-bus-png.png"
                    alt="Bus 2"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://i.ibb.co/WBMQhR7/images.jpg"
                    alt="Bus 3"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;
