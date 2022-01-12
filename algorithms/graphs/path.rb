def path(graph, start, goal)
  unexplored = Queue.new
  unexplored << start
  came_from = { start => nil }
  while (current = unexplored.pop) do
    break if current == goal

    graph[current].each do |neighbor|
      next if came_from.has_key?(neighbor)

      unexplored << neighbor
      came_from[neighbor] = current
    end
  end

  point = goal
  frontier = [goal]
  while came_from[point]
    frontier << came_from[point]
    point = came_from[point]
  end

  frontier.reverse
end


graph = {'A' => ['B', 'C'],
         'B' => ['C', 'E'],
         'C' => ['F'],
         'D' => ['C'],
         'E' => ['D'],
         'F' => ['C']}
puts path(graph, 'A', 'D').inspect # [A B E D]
puts path(graph, 'B', 'F').inspect # [B C F]
