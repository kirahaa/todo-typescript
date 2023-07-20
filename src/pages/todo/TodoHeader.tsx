import styled from "@emotion/styled";

const TodoHeader = () => {

    const today = new Date()
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'})

    return (
        <TodoHeaderBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할 일 {0}개 남음</div>
        </TodoHeaderBlock>
    )
}

export default TodoHeader

const TodoHeaderBlock = styled.div`
  padding: 4.8rem 3.2rem 2.4rem;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    font-weight: bold;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`