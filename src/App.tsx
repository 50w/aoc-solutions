import React, { useState } from "react";
import { Button, Layout, Menu, Modal, List, Input } from "antd";
import "./App.css";

import solutions from "./solutions/solutions";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export interface Selection {
  year: string;
  day: number | null;
  part: string | null;
}

const App: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<Selection>({
    year: "2019",
    day: null,
    part: null
  });
  const [answer, setAnswer] = useState("");
  const [time, setTime] = useState();
  const getRunner = async ({ year, day, part }: Selection) => {
    if (year && day !== null && part) {
      return await import(`./solutions/${year}/day_${day + 1}/${part}`);
    }
    return () => console.log("Solution Not available", year, day, part);
  };

  const handleModalEvent = (e: any) => {
    setAnswer("");
    setTime(undefined);
    setSelectedSolution({ ...selectedSolution, day: null, part: null });
  };

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={Object.keys(solutions).splice(-1, 1)}
          style={{ lineHeight: "64px" }}
        >
          {Object.keys(solutions).map(year => (
            <Menu.Item
              key={year}
              onClick={() => setSelectedSolution({ ...selectedSolution, year })}
              disabled={Boolean(!solutions[year].solutions)}
            >
              {year}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: "10px 20px" }}>
        <div style={{ background: "#fff", padding: 24 }}>
          <List
            itemLayout="vertical"
            dataSource={solutions[selectedSolution.year].solutions}
            renderItem={(day, i) => (
              <List.Item
                actions={[
                  <Button
                    onClick={() =>
                      setSelectedSolution({
                        ...selectedSolution,
                        day: i,
                        part: "part_1"
                      })
                    }
                    type="dashed"
                  >
                    Part 1
                  </Button>,
                  <Button
                    onClick={() =>
                      setSelectedSolution({
                        ...selectedSolution,
                        day: i,
                        part: "part_2"
                      })
                    }
                    type="dashed"
                  >
                    Part 2
                  </Button>
                ]}
              >
                <List.Item.Meta
                  title={<a href="https://ant.design">{day.title}</a>}
                  description={day.description}
                />
              </List.Item>
            )}
          />
        </div>
      </Content>
      <Modal
        title={`${
          solutions[selectedSolution.year].solutions?.[
            selectedSolution.day || 0
          ].title
        } - ${
          selectedSolution.part
            ? selectedSolution.part === "part_1"
              ? "Part 1"
              : "Part 2"
            : ""
        }`}
        visible={Boolean(selectedSolution.part)}
        onOk={handleModalEvent}
        onCancel={handleModalEvent}
        footer={null}
      >
        {selectedSolution.part && (
          <div>
            <Search
              placeholder="Paste input text"
              enterButton="Im a Cheater"
              size="large"
              onSearch={value =>
                getRunner(selectedSolution).then(async el => {
                  const start = Date.now();
                  el.default && setAnswer(await el.default(value.toString()));
                  setTime(Date.now() - start);
                })
              }
            />
            <p style={{ padding: 20 }}>
              <b>Answer:</b> {answer}
              <br />
              {time ? (
                <>
                  <b>Time:</b> {time} ms
                  <p>
                    {" "}
                    Have a better solution? Submit it{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/50w/aoc-solutions"
                    >
                      here
                    </a>
                  </p>
                </>
              ) : (
                ""
              )}
            </p>
          </div>
        )}
      </Modal>
      <Footer style={{ textAlign: "center" }}>
        Made with{" "}
        <span aria-label="heart" role="img">
          ♥️
        </span>{" "}
        and{" "}
        <span aria-label="coffee" role="img">
          ☕️
        </span>{" "}
        by 50W
      </Footer>
    </Layout>
  );
};

export default App;
